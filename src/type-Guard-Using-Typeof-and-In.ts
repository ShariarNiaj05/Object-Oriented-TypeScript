{
  //    type guard
  // typeof => type guard

  type AlphaNumeric = string | number;
  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const res1 = add(5, 7);
  const res2 = add(5, "8");
  //   console.log({ res1 }, { res2 });

  // in  guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log("admin user");
    } else {
      console.log("normal user");
    }
  };

  const normalUser: NormalUser = {
    name: "MR. Normal",
  };
  const adminUser: AdminUser = {
    name: "Mr. Admin",
    role: "admin",
    };
    
    getUser(normalUser)
    getUser(adminUser)
}
