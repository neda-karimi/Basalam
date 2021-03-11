import pic1 from '.././assets/icons/Ellipse4.png';
import pic2 from '.././assets/icons/Ellipse5.png';
import sosis from '.././assets/icons/image1.png';
import kalbas from '.././assets/icons/image2.png';
export default ([
    {
        "id": 0,
        "vendorname": "خوشمزه های  خاتون",
        "name": "مینو هنگام",
        "location": "از سعادت شهر",
        "quantity": 2,
        "pic":pic1,
        "product": [
            {
                "id": 0,
                "nameofproduct": "سوسیس آلمانی پنیری",
                "newprice": 75000,
                "oldprice": 85000,
                "quantityofproduct": 3,
                "minus": "-",
                "plus": "+",
                "pic": sosis

            },
            {
                "id": 1,
                "nameofproduct": "کالباس پسته",
                "newprice": 15000,
                "oldprice": 35000,
                "quantityofproduct": 1,
                "minus": "-",
                "plus": "+",
                "pic": kalbas

            }

        ],
        "totalprice": [
            {
            "numOfproduct": 2,
             "price": 75000,
            }
        ]
    },
    {
        "id": 1,
        "vendorname": "محصولات غذایی ولیک",
        "name": "سارا خوشدل ",
        "location": "از بوشهر",
        "quantity": 1,
        "pic": pic2,
        "product": [
            {
                "id": 0,
                "nameofproduct": "سوسیس آلمانی پنیری",
                "newprice": 61500,
                "oldprice": 85000,
                "quantityofproduct": 3,
                "minus": "-",
                "plus": "+",
                "pic": sosis

            }



        ],
        "totalprice": [
            {
            "numOfproduct": 1,
             "price": 61500,
            }
        ]
    },
    
]
)
