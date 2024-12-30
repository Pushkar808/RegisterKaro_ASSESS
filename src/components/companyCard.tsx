import React from 'react'
import pool from "@/database/config";

const CompanyCard = async () => {
    // const [companyData, setCompanyData] = useState([]);
    const images = ["Segment.png", "Monday.png", "Segment.png", "/Brand (4).png", "Oracle.png",]
    let data;
    try {
        const client = await pool.connect();
        console.log("connected")
        const result = await client.query("Select * from public.companies")
        console.log("fetchedData", result.rows)
        data = result?.rows;
        console.log(data)
    } catch (error) {
        console.log(error)
    }

    return (
        <>
            {data || data?.length > 1 ?
                data?.map((image: any, index: any) => {
                    return <img src={image.image_url} alt="BrandImg" key={index} />
                }) :
                images?.map((image: any, index: any) => {
                    return <img src={image} alt="BrandImg" key={index} />
                })
            }
        </>
    )
}

export default CompanyCard