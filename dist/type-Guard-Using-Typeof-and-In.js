"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const res1 = add(5, 7);
    const res2 = add(5, "8");
    const getUser = (user) => {
        if ("role" in user) {
            console.log("admin user");
        }
        else {
            console.log("normal user");
        }
    };
    const normalUser = {
        name: "MR. Normal",
    };
    const adminUser = {
        name: "Mr. Admin",
        role: "admin",
    };
    getUser(normalUser);
    getUser(adminUser);
}
