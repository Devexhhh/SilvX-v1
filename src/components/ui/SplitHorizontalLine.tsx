export default function SplitHorizontalLine() {
    return (
        <div className="flex items-center gap-8 px-5 w-full h-[0.2px]">
            <div className="h-full flex-1 bg-zinc-500/50" />
            <div className="h-full flex-1 bg-zinc-500/50" />
        </div>
    );
}