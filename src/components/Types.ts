export interface speciality {
    specialty_id: string;
    folder_id: string;
    folder_name: string;
    image_url: string;
    specialty_description: string;
    specialty_name: string;
    created_at: string;
}
export interface module {
    folder_name: string;
    folder_id: string;
    module_name: string;
    module_id: string;
    specialty_id: string;
    isInTrash: string;
    created_at: string;
}
export interface course {
    course_id: string;
    course_name: string;
    file_id: string;
    module_id: string;
    created_at: string;

}