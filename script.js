function tweetMessage() {
    const message = "MIRAI TO WA GROUP PHOTO 1\n#MiraitowaTH #SaonoiBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 
