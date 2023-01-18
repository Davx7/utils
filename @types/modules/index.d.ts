/// <reference types="node" />
import chokidar from 'chokidar';
import { Stats } from 'fs';
export declare const Fs: _Fs;
export declare type houndId = 'create' | 'change' | 'delete';
interface Hound {
    watch: (path: string) => {
        on: (id: houndId, callback: (file: string, stats?: any) => void) => void;
        unwatch: (path: string) => void;
        clear: () => void;
    };
}
interface Api {
    fs: typeof import('fs');
    path: typeof import('path');
    hound: Hound;
}
interface _Fs {
    files(path: string): string[];
    api: Api;
    mkdir(path: string): void;
    write(path: string, text?: string | Function, func?: Function): void;
    readChar(path: string, callback: Function, callback2: () => string): void;
    copy(from: string, destination: string): void;
    isDir(path: string): {
        isDirectory: boolean;
        isFile: boolean;
    };
    content(path: string): string;
    name(link: string, ext?: string): string;
    ext(name: string): string;
    dirname(link: string): string;
    basedir(link: string): string;
    stats(path: string): Stats | null;
    exists(path: string): boolean;
    watchFile(link: string | object, caller: any): void;
    unwatchFile(link: string): void;
    join(path1: string, path2: string): string;
    deleteFile(path: string): void;
    deleteFolder: (link: any) => void;
    breakChar(text: string, callback: Function, callback2: () => ''): void;
    readChar2(path: string, callback: Function, callback2: () => ''): void;
    watch(path: string): void;
    watch2(path: string, options: chokidar.WatchOptions): chokidar.FSWatcher;
    createPath(mainPath: string, item: string): string;
    createDirs(path: string, base?: string): true | undefined;
    samePath(args1: string, args2: string): boolean;
    formatPath(path: any, slashType?: '/' | '\\', replaceWhiteSpaceSym?: boolean): string;
}
export {};
