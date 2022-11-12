import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {useEffect} from "react";

export default function Nav() {
    const router = useRouter();

    const {t} = useTranslation("");

    useEffect(() => {
        let dir = router.locale == "ar" ? "rtl" : "ltr";
        let lang = router.locale == "ar" ? "ar" : "en";
        document.querySelector("html").setAttribute("dir", dir);
        document.querySelector("html").setAttribute("lang", lang);
        document.querySelector("body").setAttribute("class", dir);
    }, [router.locale]);

    return (
        <div className="nav">
            <Link href="/">{t("nav.Home")}</Link>,
            <Link href="/about">{t("nav.About")}</Link>,
            <Link href="/contact">{t("nav.Contact")}</Link>,
            <Link href="/products">{t("nav.Products")}</Link>,
            <LocaleSwitcher/>
        </div>
    );
}