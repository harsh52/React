import Page from "../components/Page";

export default function MyApp({Component, PageProps}){

    return(
        <Page>
            <Component {...PageProps} />

        </Page>
    )
}