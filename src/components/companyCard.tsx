import React from 'react'
import pool from "@/database/config";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { Button } from './ui/button';

const CompanyCard = async () => {
    //sample default data if no database is connected
    const images = [
        { "company_id": 130, "company_name": "Oracle", "company_details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "contact_person": "Johnny", "contact_email": "johnny@email.com", "contact_phone": "123456690", "image_url": "/Oracle.png" },
        { "company_id": 131, "company_name": "Samsung", "company_details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "contact_person": "Alice Brown", "contact_email": "testingmail@gmail.com", "contact_phone": "9876541234", "image_url": "/Samsung.png" },
        { "company_id": 132, "company_name": "Monday", "company_details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "contact_person": "John Doe", "contact_email": "email@test.com", "contact_phone": "9876543210", "image_url": "/Monday.png" },
        { "company_id": 133, "company_name": "Segment", "company_details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "contact_person": "Pushkar", "contact_email": "test@email.com", "contact_phone": "9876543210", "image_url": "/Segment.png" }
    ]
    let data;

    //fetching data from database
    try {
        const client = await pool.connect();
        console.log("connected")
        const result = await client.query("Select * from public.companies")
        console.log("fetchedData", result.rows)
        data = result?.rows;
        console.log(data);
    } catch (error) {
        console.log(error)
    }

    //Drawer to show Company Details
    const CompanyDrawer = ({ image }: any) => {
        console.log("IMAGE", image)
        return (
            <Drawer>
                <DrawerTrigger>
                    <img src={image.image_url} alt="BrandImg" />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <div className='flex justify-between mb-4'>
                            <img src={image.image_url} alt="BrandImg" />
                            <DrawerTitle>{image.company_name}</DrawerTitle>
                        </div>
                        <DrawerDescription>
                            <span className='py-2'>Description:</span>
                            {image.company_details}
                        </DrawerDescription>

                    </DrawerHeader>
                    <DrawerFooter>
                        <div className='text-sm text-muted-foreground'>
                            <span className='py-2'>Director Details:</span>
                            <div className='flex md:justify-between justify-around'>
                                <div>
                                    <div>Name:</div>
                                    <div>{image.contact_person}</div>
                                </div>
                                <div>
                                    <div>Phone:</div>
                                    <div>{image.contact_phone}</div>
                                </div>
                                <div>
                                    <div>Email:</div>
                                    <div>{image.contact_email}</div>
                                </div>
                            </div>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>)
    }

    return (
        <>
            {data || data?.length > 1 ?
                data?.map((image: any, index: any) => {
                    return <CompanyDrawer image={image} key={index} />
                }) :
                images?.map((image: any, index: any) => {
                    return <CompanyDrawer image={image} key={index} />
                })
            }
        </>
    )
}

export default CompanyCard