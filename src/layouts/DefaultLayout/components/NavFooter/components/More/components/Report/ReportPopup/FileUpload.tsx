import { Link } from "lucide-react";
import { useState } from "react";

export default function FileUpload() {
    const [fileName, setFileName] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name); // lưu tên file
        }
    };

    return (
        <div className="flex items-center justify-between text-muted-foreground mt-2">
            {/* Upload button */}
            <label className="cursor-pointer">
                <input type="file" className="hidden" onChange={handleChange} />
                <Link />
            </label>

            {/* Hiển thị tên file */}
            <span className="ml-2 text-sm text-white">{fileName}</span>
        </div>
    );
}
