import { useState } from "react"; // Import useState hook
import { useForm } from "react-hook-form";
import Image from "next/image";

import Layout from "@/components/Layout";

export default function NewRecipePage() {
    const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleForm = (data) => {
        console.log(data);
    };

    const handleImageSelect = () => {
        document.getElementById("imageInput").click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    return (
        <Layout
            title="Munchbox - New Recipe"
            topClass="NEWRECIPEPAGE w-full h-screen"
        >
            <form onSubmit={handleSubmit(handleForm)}>
                <div>
                    {selectedImage && (
                        <div>
                            <Image
                                src={URL.createObjectURL(selectedImage)}
                                alt="Selected Image"
                                width={200}
                                height={200}
                            />
                        </div>
                    )}
                </div>
                <button onClick={handleImageSelect}>Choose Image</button>
                <input
                    type="file"
                    accept="image/*"
                    id="imageInput"
                    className="hidden"
                    {...register("recipeImage")}
                    onChange={handleImageChange} // Add onChange event to handle image selection
                />
                <p>{errors.recipeImage?.message}</p>
                <input
                    {...register("recipeTime", {
                        required: "Please enter the cooking time.",
                    })}
                    placeholder="Cooking Time (minutes)"
                />
                <p>{errors.recipeTime?.message}</p>
                <input
                    {...register("recipeName", {
                        required: "Please enter the recipe name.",
                        minLength: {
                            value: 4,
                            message: "Please enter at least 4 letters.",
                        },
                    })}
                    placeholder="Recipe Title"
                />
                <p>{errors.recipeName?.message}</p>
                <input type="submit" />
            </form>
        </Layout>
    );
}
