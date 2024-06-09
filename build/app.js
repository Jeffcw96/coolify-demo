"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const app = (0, server_1.default)();
const port = process.env.PORT || 4000;
app.get("/api/dashboard/lookup", (req, res) => {
    const transactions = [
        {
            id: 1,
            label: "A",
        },
        {
            id: 2,
            label: "B",
        },
        {
            id: 3,
            label: "C",
        },
        {
            id: 4,
            label: "D",
        },
    ];
    console.log(req.headers);
    res.json({ result: transactions });
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`App is running in port ${port}`);
}));
