import Head from "next/head";
import React from 'react'
import ReduxSample from "./reduxsample";
import store from "../store/store"



export default function Home(props) {
  console.log(props.hoge)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReduxSample/>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("### This is Server Side Props");
  console.log(store.getState())
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json()
  // console.log(context);

  return {
    props: { hoge: data },
  };
}
