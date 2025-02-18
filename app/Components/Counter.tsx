"use client"; // Required in Next.js App Router
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement } from "../redux/slices/counterSlice";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col gap-4">
            <h1>Count: {count}</h1>
            <div className="flex gap-4">
                <button className="border p-2" onClick={() => dispatch(increment())}>Plus</button>
                <button className="border p-2" onClick={() => dispatch(decrement())}>Minus</button>
            </div>
        </div>
    );
}
