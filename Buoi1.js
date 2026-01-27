// Student 1
let student1 = {
    ho: "Nguyen",
    tenLot: "Van",
    ten: "An",
    birth: {
        day: 10,
        month: 5,
        year: 2003
    },
    scores: [8, 7.5, 9],

    getFullName: function() {
        return this.ho + " " + this.tenLot + " " + this.ten;
    },

    getFullBirthDay: function() {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },

    getAVGScore: function() {
        let sum = this.scores.reduce(function(total, s) {
            return total + s;
        }, 0);
        return (sum / this.scores.length).toFixed(2);
    },

    getAge: function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.birth.year;
    }
};

// Student 2
let student2 = {
    ho: "Tran",
    tenLot: "Thi",
    ten: "Binh",
    birth: {
        day: 20,
        month: 11,
        year: 2002
    },
    scores: [6.5, 7, 8],

    getFullName: function() {
        return this.ho + " " + this.tenLot + " " + this.ten;
    },

    getFullBirthDay: function() {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },

    getAVGScore: function() {
        let sum = this.scores.reduce(function(total, s) {
            return total + s;
        }, 0);
        return (sum / this.scores.length).toFixed(2);
    },

    getAge: function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.birth.year;
    }
};

// Student 3
let student3 = {
    ho: "Le",
    tenLot: "Minh",
    ten: "Chau",
    birth: {
        day: 15,
        month: 2,
        year: 2004
    },
    scores: [9, 8.5, 9.5],

    getFullName: function() {
        return this.ho + " " + this.tenLot + " " + this.ten;
    },

    getFullBirthDay: function() {
        return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },

    getAVGScore: function() {
        let sum = this.scores.reduce(function(total, s) {
            return total + s;
        }, 0);
        return (sum / this.scores.length).toFixed(2);
    },

    getAge: function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.birth.year;
    }
};

// Danh sách student
let students = [student1, student2, student3];

// In thông tin
students.forEach((st, index) => {
    console.log(`\n--- Student ${index + 1} ---`);
    console.log("Họ tên:", st.getFullName());
    console.log("Ngày sinh:", st.getFullBirthDay());
    console.log("Tuổi:", st.getAge());
    console.log("TBC điểm:", st.getAVGScore());
});

// JSON tương ứng
let jsonData = JSON.stringify(students, null, 2);

console.log("\n=== JSON DATA ===");
console.log(jsonData);