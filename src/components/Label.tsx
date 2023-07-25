export default function Label({texto}) {
    return (
        <label className="mb-1 block text-black dark:text-white">
            {texto}
        </label>
    );
}