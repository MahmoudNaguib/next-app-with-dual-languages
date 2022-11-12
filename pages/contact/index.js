import Head from "next/head";
import {useTranslation} from "next-i18next";
export default function Index(){
    const {t} = useTranslation("");
    return (
        <div>
            <Head>
                <title>{t("meta.Contact")}</title>
                <meta name="description" content={t("meta.Contact")}></meta>
            </Head>
            <h1>{t("content.Contact content")}</h1>
        </div>
    );
}

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}