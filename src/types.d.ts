export interface Student {
  student_name: string;
  email: any;
  password?: any;
  school_name: string;
  education: string;
  grade: string;
  turn: string;
  tutor_name: string;
  house_phone_number: number;
  phone_number: number;
  subtutor_name: string;
  subtutor_phone_number: number;
  address: string;
  first_street_reference: string;
  second_street_reference: string;
  house_color: string;
  door_color: string;
}

export interface Children {
  children: React.ReactNode;
}
