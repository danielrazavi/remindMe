import AccountBag from "./AccountBag";

interface Member {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  password: string;
  accountBag: AccountBag;
}

export default Member;
