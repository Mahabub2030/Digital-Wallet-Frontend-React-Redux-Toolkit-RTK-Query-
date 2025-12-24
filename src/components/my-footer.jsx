import { t } from "i18next";

const MyFooter = () => {
    return (
        <div className="my-footer text-center p-1">
            {t("footer.created_by")} Iván Jaén Trujillo -
            <a href="https://github.com/mahabub2030" className="text-decoration-none primary-color" target="_blank" rel="noreferrer"> Mahabub ALam</a>
        </div>
    );
};

export default MyFooter;