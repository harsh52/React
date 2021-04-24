import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import UpdateProduct from "../components/UpdateProduct";

export default function UpdatePage({query}){
    return <div>
        <UpdateProduct id={query.id}/>
        </div>
}