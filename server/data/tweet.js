import * as userRepository from "./auth.js";
import { db } from '../db/database.js';

export async function getAll() {
    return db.execute("SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.username, us.name, us.url FROM tweets as tw JOIN users as us ON tw.userId=us.id ORDER BY tw.createdAt DESC")
    .then(result=> result[0]);
}

export async function getAllByUsername(username) {
    return db.execute("SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.username, us.name, us.url FROM tweets as tw JOIN users as us ON tw.userId=us.id WHERE us.username=? ORDER BY tw.createdAt DESC",[username])
    .then(result => result[0]);
}

export async function getById(id) {
    return db.execute("SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.username, us.name, us.url FROM tweets as tw JOIN users as us ON tw.userId=us.id WHERE tw.id=? ORDER BY tw.createdAt DESC",[id])
    .then(result => result[0][0]);
}

export async function create(text, userId) {
    return db.execute("INSERT INTO tweets (text, createdAt, userId) VALUES(?,?,?)",[text, new Date(), userId])
    .then(result => getById(result[0].insertId));
}

export async function update(id, text) {
    return db.execute("UPDATE tweets SET text=? WHERE id=?",[text,id])
    .then(()=>getById(id));
}

export function remove(id) {
    return db.execute("DELETE FROM tweets WHERE id=?",[id]);
}