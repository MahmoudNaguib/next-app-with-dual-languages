import Head from "next/head";
import Link from "next/link";
import {useTranslation} from "next-i18next";

export default function Index(probs) {
    const {t} = useTranslation("");
    return (
        <div>
            <Head>
                <title>{t("meta.Products")}</title>
                <meta name="description" content={t("meta.Products")}></meta>
            </Head>
            <h1>{t("content.Products list")}</h1>
            <ul>
                {probs.rows.map(row => (
                    <li key={row.id}>
                        <Link href={`/products/${row.id}`}>{row.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

import { serverSideTranslations } from "next-i18next/serverSideTranslations"
export async function getServerSideProps({locale}) {
    const res = await fetch(`${process.env.APP_URL}/api/products`);
    const data = await res.json();
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            rows: data
        }
    }
}