import React, { useState } from 'react';

const DirectoryItem = ({ entry, onDirectoryClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [files, setFiles] = useState([]);

    const toggleOpen = async () => {
        if (entry.kind === 'directory') {
            setIsOpen(!isOpen);
            if (!isOpen && files.length === 0) { // 하위 디렉토리를 처음으로 열 때만 파일을 로드합니다.
                const fileList = await onDirectoryClick(entry);
                setFiles(fileList);
            }
        }
    };

    return (
        <li>
            <div onClick={toggleOpen}>
                {entry.kind === 'directory' ? <strong>{entry.name}/</strong> : entry.name}
            </div>
            {isOpen && (
                <ul>
                    {files.map((file, index) => (
                        <DirectoryItem key={index} entry={file} onDirectoryClick={onDirectoryClick} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default function DirectoryLoad() {
    const [rootFiles, setRootFiles] = useState([]);

    async function getDirectoryFiles(directoryHandle) {
     const fileList = [];
     for await (const entry of directoryHandle.values()) {
         fileList.push(entry);
     }
     // 디렉토리와 파일을 분리합니다.
     const directories = fileList.filter(entry => entry.kind === 'directory');
     const files = fileList.filter(entry => entry.kind !== 'directory');

     // 디렉토리와 파일을 각각 이름 순으로 정렬합니다.
     directories.sort((a, b) => a.name.localeCompare(b.name));
     files.sort((a, b) => a.name.localeCompare(b.name));

     // 정렬된 디렉토리와 파일을 다시 합칩니다.
     return [...directories, ...files];
    }


    async function handleDirectoryLoad(directoryHandle = null) {
        if (!directoryHandle) {
            directoryHandle = await window.showDirectoryPicker();
        }
        const fileList = await getDirectoryFiles(directoryHandle);
        setRootFiles(fileList);
    }

    return (
        <div className="DirectoryLoad">
            <h2>Directory List</h2>
            <button onClick={() => handleDirectoryLoad()}>Load Directory</button>
            <ul>
                {rootFiles.map((entry, index) => (
                    <DirectoryItem key={index} entry={entry} onDirectoryClick={getDirectoryFiles} />
                ))}
            </ul>
        </div>
    );
}
