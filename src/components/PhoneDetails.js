import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import phoneServices from "../services/phone.services";

function PhoneDetails() {
    
    const [phoneDetails, setPhoneDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const { phoneId } = useParams();

    const getPhoneDetails = () => {
        phoneServices.getPhoneDetails(phoneId)
            .then( response => {
                setPhoneDetails(response.data);
            })
            .catch( error => {
                setErrorMessage(error.response.data.message);
            })
    }

    useEffect(() => {
        getPhoneDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

};

export default PhoneDetails;