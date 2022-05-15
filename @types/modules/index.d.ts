/// <reference types="node" />
import chokidar from 'chokidar';
import { WatchOptions } from 'fs';
export declare const Fs: {
    files: (path: any) => string[];
    api: {
        fs: typeof import('fs');
        path: typeof import('path');
        hound: Hound;
    };
    mkdir: (path: any) => void;
    write: (path: any, text?: string | Function, func?: Function) => void;
    readChar(path: string, callback: Function, callback2?: Function): void;
    copy: (from: string, destination: string) => void;
    isDir: (path: any) => {
        isDirectory: boolean;
        isFile: boolean;
    };
    content: (path: any) => string;
    name: (link: string, ext?: string) => string;
    ext(name: string): string;
    dirname(link: string): string;
    basedir(link: any): string;
    stats: (path: any) => import("fs").Stats;
    exists: (path: any) => boolean;
    watchFile: (link: any, caller: any) => void;
    unwatchFile: (link: string) => void;
    join: (path1: string, path2: string) => string;
    deleteFile(path: string): void;
    deleteFolder: (link: any) => void;
    breakChar(text: string, callback: Function, callback2?: Function): void;
    readChar2(path: string, callback: Function, callback2?: Function): void;
    watch(path: any): {
        on: (id: houndId, callback: (file: string, stats?: any) => void) => void;
        unwatch: (path: string) => void;
        clear: () => void;
    };
    watch2(path: string, options?: chokidar.WatchOptions): chokidar.FSWatcher;
    createPath(mainPath: string, item: string): string;
    createDirs(path: string): boolean;
    samePath(args1: string, args2: string): boolean;
};
export declare type houndId = 'create' | 'change' | 'delete';
interface Hound {
    watch: (path: string) => {
        on: (id: houndId, callback: (file: string, stats?: any) => void) => void;
        unwatch: (path: string) => void;
        clear: () => void;
    };
}
export {};
