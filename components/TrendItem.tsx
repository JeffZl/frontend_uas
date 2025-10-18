interface Trend {
    topic: string;
    title: string;
    postCount: string;
}

const TrendItem = ({ topic, title, postCount }: Trend) => {
    return (
        <div
            className="p-3 rounded-lg hover:bg-[#202327] cursor-pointer transition"
        >
            <span className="block text-gray-400 text-sm">
                {topic} · Trending
            </span>
            <p className="font-bold text-lg">{title}</p>
            <span className="block text-gray-500 text-sm">{postCount}</span>
        </div>
    )
}

export default TrendItem