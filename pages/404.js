import {useTranslation} from "next-i18next";
export default function Error404(){
    const {t} = useTranslation("");
    return (
        <div>
            404 {t("content.Page not found")}
        </div>
    )
}
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}