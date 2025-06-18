import {
    IpcMainEvent,           // 如果這個交互是單向的 (也就是event.reply不是一對一回應，可能不回應，或是像stream一樣多次回應)，則使用 IpcMainEvent
    IpcMainInvokeEvent      // 如果這個交互是雙向的 (也就是event.reply是有回應的，一問一答)，則使用 IpcMainInvokeEvent
} from "electron";

import {
    EncodeType
} from "./encode-type";

// A simple fire-and-forget style handler
export interface startup_test<T extends IpcMainInvokeEvent> {
    (_ev: T): string;
}

export interface select_pdf_file<T extends IpcMainInvokeEvent> {
    (_ev: T): string | undefined;
}

export interface select_sqrt_txt_file<T extends IpcMainInvokeEvent> {
    (_ev: T): string | undefined;
}

export interface select_output_dir<T extends IpcMainInvokeEvent> {
    (_ev: T): string | undefined;
}

export interface exec_encrypt<T extends IpcMainInvokeEvent> {
    (_ev: T, pdf_file_path: string, sqrt_txt_file_path: string, output_dir_path: string, encode_type: keyof EncodeType): Promise<boolean>;
}
