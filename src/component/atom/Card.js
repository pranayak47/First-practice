import React from 'react'
import { FirstCard } from '../Molecules/Data'
import './Card.module.css'


function CardDetails() {

    const productDetails = [

        {

            ManPic: "https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=600",
            ManName: "Anubhav Singh , IIT Kanpur",
            ManPosition: "CTO @ FunctionUp",
            ManExp1: "7 Yrs Exp.",

        },
        {

            ManPic: "https://media.istockphoto.com/id/1048706896/photo/young-man-with-eyeglasses.jpg?s=170667a&w=0&k=20&c=gskk8yOzP51sOXcnaiGeHc_iSevZveSjrOkfMyXFALQ=",
            ManName: "Aviral Sharma , IIT Delhi",
            ManPosition: "Co-founder @ Dubdub.ai",
            ManExp1: "7 Yrs Exp.",

        },
        {

            ManPic: "https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg",
            ManName: "Rahul Garg , IIT Kanpur",
            ManPosition: "Data Scientist Manager @ Optum",
            ManExp1: "7 Yrs Exp.",

        },
        {

            ManPic: "https://media.istockphoto.com/id/618976202/photo/fashion-young-woman.jpg?s=170667a&w=0&k=20&c=PXSi8TGGfFjRFd5XXpYKRjt8wSTEpa3Eqq4xT6OIqYA=",
            ManName: "Uddhav Bamba , IIT Dhanbad",
            ManPosition: "Data Scientist Manager @ Optum",
            ManExp1: "7 Yrs Exp.",

        },
        {

            ManPic: "https://media.istockphoto.com/id/1048706896/photo/young-man-with-eyeglasses.jpg?s=170667a&w=0&k=20&c=gskk8yOzP51sOXcnaiGeHc_iSevZveSjrOkfMyXFALQ=",
            ManName: "Aviral Sharma , IIT Delhi",
            ManPosition: "Co-founder @ Dubdub.ai",
            ManExp1: "7 Yrs Exp.",

        },
        {

            ManPic: "https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg",
            ManName: "Aviral Sharma , IIT Delhi",
            ManPosition: "Data Scientist Manager @ Optum",
            ManExp1: "7 Yrs Exp.",

        },
        {

            ManPic: "https://media.istockphoto.com/id/618976202/photo/fashion-young-woman.jpg?s=170667a&w=0&k=20&c=PXSi8TGGfFjRFd5XXpYKRjt8wSTEpa3Eqq4xT6OIqYA=",
            ManName: "Aviral Sharma , IIT Delhi",
            ManPosition: "Applied Scientist @ Amazon",
            ManExp1: "7 Yrs Exp.",

        },
        {

            ManPic: "https://media.istockphoto.com/id/1048706896/photo/young-man-with-eyeglasses.jpg?s=170667a&w=0&k=20&c=gskk8yOzP51sOXcnaiGeHc_iSevZveSjrOkfMyXFALQ=",
            ManName: "Aviral Sharma , IIT Delhi",
            ManPosition: "Senior Data Scientist @ Tredence",
            ManExp1: "7 Yrs Exp.",

        },
        {

            ManPic: "https://image.shutterstock.com/mosaic_250/2780032/1548802709/stock-photo-headshot-portrait-of-happy-millennial-man-in-casual-clothes-isolated-on-grey-studio-background-1548802709.jpg",
            ManName: "Aviral Sharma , IIT Delhi",
            ManPosition: "Data Scientist Manager @ Optum",
            ManExp1: "7 Yrs Exp.",

        },
        {

            ManPic: "https://media.istockphoto.com/id/618976202/photo/fashion-young-woman.jpg?s=170667a&w=0&k=20&c=PXSi8TGGfFjRFd5XXpYKRjt8wSTEpa3Eqq4xT6OIqYA=",
            ManName: "Aviral Sharma , IIT Delhi",
            ManPosition: "Senior Data Scientist @ Sharechat",
            ManExp1: "7 Yrs Exp.",

        },
        {

            ManPic: "https://media.istockphoto.com/id/1048706896/photo/young-man-with-eyeglasses.jpg?s=170667a&w=0&k=20&c=gskk8yOzP51sOXcnaiGeHc_iSevZveSjrOkfMyXFALQ=",
            ManName: "Uddhav Bamba , IIT Dhanbad",
            ManPosition: "Senior Engineer @ Uber California",
            ManExp1: "7 Yrs Exp.",

        }

    ]


    return (
        <div className="App">
            {
                productDetails.map((product) => (
                    <FirstCard

                        ManPic={product.ManPic}
                        ManName={product.ManName}
                        ManPosition={product.ManPosition}
                        ManExp1={product.ManExp1}

                    />
                ))
            }

        </div>
    );
}

export default CardDetails;