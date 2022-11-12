import Head from "next/head";
import {useTranslation} from "next-i18next";

export default function Home() {
    const {t} = useTranslation("");
    return (
        <div>
            <Head>
                <title>{t("meta.Home")}</title>
                <meta name="description" content={t("meta.Home")}></meta>
            </Head>
            <h1>{t("content.Home content")}</h1>
        </div>
    )
}

import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}