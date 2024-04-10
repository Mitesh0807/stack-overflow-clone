// import Image from "next/image"
// import Link from "next/link"

// export default function RighNav() {
//     const hotQuestions = [
//         {
//             _id: 1,
//             title: "How do I import data from CSV?",
//             description: "How do I import data from CSV?",
//             tags: ["data", "import"],
//         },
//         {
//             _id: 2,
//             title: "How do I import data from CSV?",
//             description: "How do I import data from CSV?",
//             tags: ["data", "import"],
//         },
//         {
//             _id: 3,
//             title: "How do I import data from CSV?",
//             description: "How do I import data from CSV?",
//             tags: ["data", "import"],
//         },
//         {
//             _id: 4,
//             title: "How do I import data from CSV?",
//             description: "How do I import data from CSV?",
//             tags: ["data", "import"],
//         },
//     ]
//     const popularTags = ["data", "import", "data", "import", "data", "import", "data", "import"]
//     return (
//         <>
//             <div >
//                 <section className=" light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
//                     <div>
//                         <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
//                         <div className="mt-7 flex w-full flex-col gap-[30px]">
//                             {hotQuestions.map((question) => (
//                                 <Link
//                                     href={`/question/${question._id}`}
//                                     key={question._id}
//                                     className="flex cursor-pointer items-center justify-between gap-7"
//                                 >
//                                     <p className="body-medium text-dark500_light700">
//                                         {question.title}
//                                     </p>
//                                     <Image
//                                         src="/assets/icons/chevron-right.svg"
//                                         alt="chevron right"
//                                         width={20}
//                                         height={20}
//                                         className="invert-colors"
//                                     />
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="mt-16">
//                         <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
//                         <div className="mt-7 flex flex-col gap-4">
//                             {popularTags.map((tag) => (
//                                 <Link
//                                     href={`/tag/${tag}`}
//                                     key={tag}
//                                     className="body-medium text-dark500_light700"
//                                 >
//                                     {tag}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }


import Image from "next/image"
import Link from "next/link"

export default function RighNav() {
    const hotQuestions = [
        {
            _id: 1,
            title: "How do I import data from CSV?",
            description: "How do I import data from CSV?",
            tags: ["data", "import"],
        },
        {
            _id: 2,
            title: "How do I import data from CSV?",
            description: "How do I import data from CSV?",
            tags: ["data", "import"],
        },
        {
            _id: 3,
            title: "How do I import data from CSV?",
            description: "How do I import data from CSV?",
            tags: ["data", "import"],
        },
        {
            _id: 4,
            title: "How do I import data from CSV?",
            description: "How do I import data from CSV?",
            tags: ["data", "import"],
        },
    ]
    const popularTags = ["data", "import", "data", "import", "data", "import", "data", "import"]
    return (
        <div>
            <section className="light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
                <div>
                    <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
                    <div className="mt-7 flex w-full flex-col gap-[30px]">
                        {hotQuestions.map((question) => (
                            <Link
                                href={`/question/${question._id}`}
                                key={question._id}
                                className="flex cursor-pointer items-center justify-between gap-7"
                            >
                                <p className="body-medium text-dark500_light700">
                                    {question.title}
                                </p>
                                <Image
                                    src="/assets/icons/chevron-right.svg"
                                    alt="chevron right"
                                    width={20}
                                    height={20}
                                    className="invert-colors"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
                    <div className="mt-7 flex flex-col gap-4">
                        {popularTags.map((tag, index) => (
                            <Link
                                href={`/tag/${tag}`}
                                key={index}
                                className="body-medium text-dark500_light700"
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
