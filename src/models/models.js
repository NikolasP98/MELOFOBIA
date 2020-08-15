export class UserPublic {

    static fromDocument(data) {
        return new UserPublic(data.username);
    }

    constructor(username) {
        this.username = username;
    }

    map() {
        return {
            "username": this.username
        };
    }

}

export class UserPrivate {

    static fromDocument(data) {
        return new UserPrivate(data.email, data.firstname, data.lastname, data.roleId);
    }

    constructor(email, firstname, lastname, roleId) {
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.roleId = roleId;
    }

    map() {
        return {
            "username": this.username,
            "firstname": this.firstname,
            "lastname": this.lastname,
            "roleId": this.roleId
        };
    }

}

export class UserRole {

    static fromDocument(data) {
        return new UserRole(data.name, data.type);
    }

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    map() {
        return {
            "name": this.name,
            "type": this.type
        };
    }

}

export class Post {

    static fromDocument(data) {
        return new Post(data.authorId, data.content, data.spotifyUrl, data.tags, data.timestamp.toDate().toLocaleString(), data.title, data.type);
    }

    constructor(authorId, content, spotifyUrl, tags, timestamp, title, type) {
        this.authorId = authorId;
        this.content = content;
        this.spotifyUrl = spotifyUrl;
        this.tags = tags;
        this.timestamp = timestamp;
        this.title = title;
        this.type = type;
    }

    map() {
        return {
            "authorId": this.authorId,
            "content": this.content,
            "spotifyUrl": this.spotifyUrl,
            "tags": this.tags,
            "timestamp": this.timestamp,
            "title": this.title,
            "type": this.type
        };
    }

}
