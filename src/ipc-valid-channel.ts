interface IPCValidChannelMap {
    startup_test: string;
    select_pdf_file: string;
    select_sqrt_txt_file: string;
    select_output_dir: string;
    exec_encrypt: string;
}

export type IPCValidChannel = keyof IPCValidChannelMap;
