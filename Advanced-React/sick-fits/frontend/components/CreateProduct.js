import { useMutation } from '@apollo/client'
import useForm from '../lib/useForm';
import Form from './styles/Form'
import gql from 'graphql-tag'
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';
import Router from 'next/router';


const CREATE_PRODUCT_MUTATION = gql`
mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? and what types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
){
    createProduct(
        data:{
            name: $name
            description: $description
            price: $price
            status: "AVAILABLE"
            photo: {create: {image: $image, altText:$name}}
        }
    ){
        id
        price
        description,
        name
    }
}
`;

export default function CreateProduct(){
    const{inputs,handleChange,resetForm,clearForm} = useForm({
        image:'',
        name: 'Nice Shoes',
        price: 34243,
        description: 'These are the best shoes!'
    });

    const [createProduct, {loading,error,data}] = useMutation(
        CREATE_PRODUCT_MUTATION,
        {
            variables: inputs,
            refetchQueries:[{query: ALL_PRODUCTS_QUERY}],
        }
    )
     //console.log(createProduct);
    return(
        <Form onSubmit={ async (e) => {
            e.preventDefault();
            //console.log(inputs);
            // Submit the input filed to the backend:
            const res = await createProduct();
            clearForm()
            // Go to that product page!
            Router.push({
                pathname:`/product/${res.data.createProduct.id}`,
            })
        }}
        >
            <DisplayError error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="image">
                Image
                <input
                type = "file"
                id = "image"
                name= "image"
                onChange={handleChange}
                />
            </label>

            <label htmlFor="name">
                Name
                <input
                type = "text"
                id = "name"
                name= "name"
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
                />
            </label>

            <label htmlFor="price">
                Price
                <input
                type = "number"
                id = "price"
                name= "price"
                placeholder="price"
                value={inputs.price}
                onChange={handleChange}
                />
            </label>

            <label htmlFor="description">
                Description
                <textarea
                id = "description"
                name= "description"
                placeholder="description"
                value={inputs.description}
                onChange={handleChange}
                />
            </label>

            {/* <button type="button" onClick={clearForm}>Clear Form</button>
            <button type="button" onClick={resetForm}>Reset Form</button> */}
            <button type="submit">+ Add Product</button>

            </fieldset>
        </Form>
    )
}