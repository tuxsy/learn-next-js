import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    return (
        <div>Loading ...
            <Skeleton count={1} height={30} />
            <Skeleton count={1} height={20} width={200} />
        </div>
    );
}