require("dotenv").config();
import Image from "next/image";
import { montserrat } from "@/components/Fonts";
import Link from "next/link";

const defaultImage =
    "https://www.shareicon.net/data/512x512/2016/09/01/822751_user_512x512.png";
const defaultFollowers = [
    "@mammucis",
    "@munchboxman",
    "@crystalhalton",
    "@bob",
    "@zuzu",
    "dudu",
];

const followingUsers = [
    {
        username: "@eddieobrams",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@mammucis",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 3,
    },
    {
        username: "@zuzu",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 9,
    },
    {
        username: "@bob",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@crystalhalton",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 14,
    },
    {
        username: "@eddieobrams",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@mammucis",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 3,
    },
    {
        username: "@zuzu",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 9,
    },
    {
        username: "@bob",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@crystalhalton",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 14,
    },
    {
        username: "@eddieobrams",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@mammucis",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 3,
    },
    {
        username: "@zuzu",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 9,
    },
    {
        username: "@bob",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@crystalhalton",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 14,
    },
    {
        username: "@eddieobrams",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@mammucis",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 3,
    },
    {
        username: "@zuzu",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 9,
    },
    {
        username: "@bob",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@crystalhaltonsdasdasadasd",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 14,
    },
];

const allUsers = [
    {
        username: "@eddieobrams",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@mammucis",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 3,
    },
    {
        username: "@zuzu",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 9,
    },
    {
        username: "@bob",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@crystalhalton",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 14,
    },
    {
        username: "@eddieobrams",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@mammucis",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 3,
    },
    {
        username: "@zuzu",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 9,
    },
    {
        username: "@bob",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@crystalhalton",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 14,
    },
    {
        username: "@eddieobrams",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@mammucis",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 3,
    },
    {
        username: "@zuzu",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 9,
    },
    {
        username: "@bob",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@crystalhalton",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 14,
    },
    {
        username: "@eddieobrams",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@mammucis",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 3,
    },
    {
        username: "@zuzu",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 9,
    },
    {
        username: "@bob",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 6,
    },
    {
        username: "@crystalhaltonsdasdasadasd",
        image: defaultImage,
        followers: defaultFollowers,
        recipes: 14,
    },
];

export function UserCard(props) {
    const { username, image, followers, recipes, id } = props.user;
    return (
        <div
            className="bg-[rgb(29,62,90)] mb-2 h-full rounded-2xl min-w-[140px] min-h-[200px] mx-1"
            key={id}
        >
            <Image
                src={image}
                width={120}
                height={120}
                draggable={false}
                className="mx-auto mt-4 bg-white rounded-[50%] border-4 border-white"
            />
            <Link href="about:blank" target="_blank">
                <h1 className="text-center px-2 text-sm text-white mt-2 overflow-ellipsis max-w-[140px] break-words line-clamp-1 font-bold">
                    {username}
                </h1>
            </Link>
            <h1 className="text-center px-2 text-sm mt-1 text-white overflow-ellipsis max-w-[140px] break-words line-clamp-1 font-bold">
                {props.displayRecipeAmount
                    ? `${recipes} recipes`
                    : `${followers.length} followers`}
            </h1>
        </div>
    );
}

export default function SocialDisplay({ data }) {
    return (
        <div className="SOCIALDISPLAY pt-4 max-w-full h-full flex-col mx-[30px] justify-center mt-10 flex-wrap overflow-auto shadow-inner">
            <h1 className="text-center text-[rgb(29,62,90)] font-bold text-2xl mb-4">
                Following
            </h1>
            <div className="FOLLOWING mb-2 scrollbar scrollbar-track-[rgba(0,0,0,0.53)] scrollbar-thumb-[rgba(255,255,255,0.87)] overflow-x-auto w-full h-[] flex">
                {followingUsers.map((u, index) => {
                    u.id = index;
                    return <UserCard user={u} displayRecipeAmount key={u.id} />;
                })}
            </div>
            <h1 className="text-center text-[rgb(29,62,90)] font-bold text-2xl mb-4">
                Top 10
            </h1>
            <div className="FEATURED mb-2 scrollbar justify-between scrollbar-track-[rgba(0,0,0,0.53)] scrollbar-thumb-[rgba(255,255,255,0.87)] overflow-x-auto w-full h-[] flex">
                {allUsers
                    .sort((a, b) => b.recipes - a.recipes.length)
                    .slice(0, 10)
                    .map((u, index) => {
                        u.id = index;
                        return (
                            <UserCard user={u} displayRecipeAmount key={u.id} />
                        );
                    })}
            </div>
        </div>
    );
}
