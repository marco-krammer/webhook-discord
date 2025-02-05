class MessageBuilder {
    /**
     * This is the class to initialize a new MessageBuilder.
     *
     * Chaining of properties is supported so you can message.setTitle("abc").setDescription("blah")
     * @constructor
     */
    constructor() {
        this.data = {
            "embeds": [{ "fields": [] }]
        };
    }

    /**
     * Return the data that would be sent to the webhook if it was executed.
     */
    getJSON() {
        return this.data;
    }

    /**
     * Set the description of the embed
     *
     * @param {string} description The description to use
     */
    setDescription(description) {
        this.data.embeds[0].text = description;
        return this;
    }

    /**
     * Add an avatar to the webhooks
     *
     * @param {string} avatarURL The URL to the avatar.
     */
    setAvatar(avatarURL) {
        this.data.avatar_url = avatarURL;
        return this;
    }

    /**
     * Set the footer of the embed
     *
     * @param {string} footer The footer to use
     * @param {string} footerIcon The icon to display in the footer
     */
    setFooter(footer) {
        this.data.embeds[0].footer = {
            text: footer
        }
        return this;
    }

    /**
     * Set the title of the embed
     *
     * @param {string} title The title to use
     */
    setTitle(title) {
        this.data.embeds[0].title = title;
        return this;
    }

    /**
     * This method sets the username of the hook
     *
     * @param {string} username The username to use
     */
    setName(username) {
        this.data.username = username;
        return this;
    }

    /**
     * This method sets the color of the embed.
     *
     * @param {string} color The hexadecimal color
     */
    setColor(color) {
        this.data.embeds[0].color = color;
        return this;
    }

    /**
     * Set the text to be sent alongside the embed.
     *
     * @param {string} text The text.
     */
    setText(text) {
        this.data.text = text;
        return this;
    }

    /**
     * This method adds a new field to the embed.
     *
     * @param {string} title The title of the field.
     * @param {string} value The value of the field.
     * @param {bool} inline Should the field be an inline field
     */
    addField(title, value, inline) {
        if (!inline) {
            inline = false;
        }

        const fieldObj = {
            "name": title,
            "value": value,
            "inline": inline
        };

        this.data.embeds[0].fields.push(fieldObj);
        return this;
    }

    /**
     * Remove a field from an embed
     *
     * @param {string} name The name of the field to remove
     */
    removeField(name) {
        this.data.embeds[0].fields = this.data.embeds[0].fields.filter(field => field.title != name);

        return this;
    }

    /**
     * Set timestamp, if no argument is passed, the current
     * time is used.
     *
     * @param {number} timestamp The timestamp to use.
     */
    setTime(timestamp) {
        if (!timestamp) {
            timestamp = new Date() / 1000;
        }

        this.data.embeds[0].ts = timestamp;
        return this;
    }

    /**
     * This method adds an image to the embed.
     *
     * @param {string} imageURL The URL to the image.
     */
    setImage(imageURL) {
        if (!imageURL) {
            process.emitWarning("Image passed was null, nothing will be displayed in Discord");
        }
        this.data.embeds[0].image_url = imageURL;
        return this;
    }

    /**
     * This method adds clickable url
     * 
     * @param {string} url
     */
    setURL(url) {
        this.data.embeds[0].url = url;
        return this;
    }

    /**
     * This method adds image url as thumbnail
     * 
     * @param {string} thumbnailURL 
     */
    setThumbnail(thumbnailURL) {
        this.data.embeds[0].thumbnail = {
            url: thumbnailURL
        };
        return this;
    }

    /**
     * This method sets author name in discord embed
     * 
     * @param {String} author 
     */
    setAuthor(author) {
        this.data.embeds[0].author = {
            name: author
        }
        return this;
    }
}

module.exports = MessageBuilder;
