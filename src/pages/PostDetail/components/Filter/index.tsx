import Activity from "@/pages/PostDetail/components/Filter/components/Activity";
import Sort from "@/pages/PostDetail/components/Filter/components/Sort";

function Filter() {
    return (
        <div className="flex items-center justify-between border-t pt-4">
            <Sort />
            <Activity />
        </div>
    );
}

export default Filter;
