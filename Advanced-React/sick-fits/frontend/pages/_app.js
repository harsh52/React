import Page from "../components/Page";
import Router from 'next/router';
import NProgress from 'nprogress';
import '../components/styles/nprogress.css';
import { ApolloProvider } from "@apollo/client";import { Component } from "react";
import withData from "../lib/withData";
import { CartStateProvider } from '../lib/cartState';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({Component, pageProps,apollo}){
    console.log(apollo)
    return(
        <ApolloProvider client={apollo}>
            <CartStateProvider>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </CartStateProvider>
        </ApolloProvider>
    );
}

MyApp.getInitialProps = async function({ component, ctx}){
    let pageProps = {}
    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx)  
    }
    pageProps.query = ctx.query;
    return{pageProps};
}

export default withData(MyApp)