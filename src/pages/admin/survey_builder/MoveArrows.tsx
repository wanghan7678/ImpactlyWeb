import ArrowUpCircleLineIcon from "remixicon-react/ArrowUpCircleLineIcon";
import ArrowDownCircleLineIcon from "remixicon-react/ArrowDownCircleLineIcon";
import React from "react";
import {Survey, SurveyField} from "../../../models/Survey";
import {FormikProps} from "formik";

interface MoveArrowsProps {
    field: SurveyField;
    fi: number;
    formik: FormikProps<Survey>;
    onSelect: (index: number) => void;
}

const MoveArrows: React.FC<MoveArrowsProps> = ({field, fi, formik, onSelect}) => {

    const handleMoveUp = () => {
        if (fi === 0) return;

        const fields = [...formik.values.fields];
        fields.splice(fi, 1);
        fields.splice(fi-1, 0, field);

        formik.setFieldValue("fields", fields);
        onSelect(fi-1);
    }

    const handleMoveDown = () => {
        if (fi === formik.values.fields.length) return;

        const fields = [...formik.values.fields];
        fields.splice(fi, 1);
        fields.splice(fi+1, 0, field);

        formik.setFieldValue("fields", fields);
        onSelect(fi+1);
    }

    return (
        <>
            <ArrowUpCircleLineIcon onClick={handleMoveUp} style={{ cursor: "pointer" }}/>
            <ArrowDownCircleLineIcon onClick={handleMoveDown} style={{ cursor: "pointer" }}/>
        </>
    )
}

export default MoveArrows;