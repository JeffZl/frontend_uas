import Image from "next/image"

interface User {
    name: string,
    handle: string,
    avatar: string
}

const UserItem = ({ name, handle, avatar }: User) => {
    return (
        <div className="flex items-center justify-between" key={handle}>
            <div className="flex items-center gap-2.5">
                <Image
                    src={avatar}
                    alt={name}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div className="flex-grow">
                    <span className="block font-bold">{name}</span>
                    <span className="text-sm text-gray-500">{handle}</span>
                </div>
            </div>
            <button className="bg-white text-black font-bold text-sm py-1.5 px-3 rounded-full hover:bg-gray-200 transition-colors">
                Follow
            </button>
        </div>
    )
}
export default UserItem