import useCount from "./useCount";

export default function () {
    const count = useCount((state) => state.count)

    return {
        count
    }
}