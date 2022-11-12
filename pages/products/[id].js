import Head from "next/head";
import {useTranslation} from "next-i18next";

export default function Details(props){
    const {t} = useTranslation("");
    return (
        <div>
            <Head>
                <title>{t("meta.Products")} -  {props.row.title}</title>
                <meta name="description" content={props.row.title.substring(0,20)}></meta>
            </Head>
            <h1>{props.row.title}</h1>
            <p>
                {props.row.body}
            </p>
        </div>
    );
}
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getServerSideProps(ctx){
    const res = await fetch(`${process.env.APP_URL}/api/products/${ctx.params.id}`);
    const data = await res.json();
    return {
        props: {
            ...(await serverSideTranslations(ctx.locale, ["common"])),
            row: data
        }
    }
}