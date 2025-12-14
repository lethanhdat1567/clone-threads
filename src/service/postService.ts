import api from "@/lib/axios";

export interface User {
    id: number;
    name: string;
    username: string;
    bio: string | null;
    is_private: boolean;
    verified: boolean;
    created_at: string;
    updated_at: string;
    avatar_url: string | null;
}

export interface Post {
    id: number;
    user_id: number;
    content: string;
    parent_id: number | null;
    original_post_id: number | null;
    is_quote: boolean;
    reply_permission: string;
    requires_reply_approval: boolean;
    status: string;
    is_ghost: boolean;
    ghost_expires_at: string | null;
    topic_id: number | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;

    likes_count: number;
    replies_count: number;
    reposts_and_quotes_count: number;

    media_urls: string[];
    is_liked_by_auth: boolean;
    is_saved_by_auth: boolean;
    is_reposted_by_auth: boolean;

    user: User | null;
    original_post: Post | null;
}

export type CreatePostPayload = {
    content: string;
    reply_permission: "everyone" | "followers" | "following" | "mentioned";
    requires_reply_approval?: boolean;
    parent_id?: number | null;
    topic_name?: string;
};

export const postService = {
    getFeed: async (page = 1, per_page = 10, type = "for_you") => {
        const res = await api.get(`/posts/feed`, {
            params: { page, per_page, type },
        });
        return res.data;
    },

    getSinglePost: async (postId: number) => {
        const res = await api.get(`/posts/${postId}`);
        return res.data;
    },

    getReplies: async (postId: number) => {
        const res = await api.get(`/posts/${postId}/replies`);
        return res.data;
    },

    getSpendingReplies: async (postId: number) => {
        const res = await api.get(`/posts/${postId}/pending-replies`);
        return res.data;
    },

    createPost: async (data: CreatePostPayload) => {
        const res = await api.post(`/posts`, data);
        return res.data;
    },

    createReply: async (id: number, data: any) => {
        const res = await api.post(`/posts/${id}/reply`, data);
        return res.data;
    },

    likePost: async (postId: number) => {
        const res = await api.post(`/posts/${postId}/like`);
        return res.data;
    },

    repostPost: async (postId: number) => {
        const res = await api.post(`/posts/${postId}/repost`);
        return res.data;
    },

    quotePost: async (postId: number) => {
        const res = await api.post(`/posts/${postId}/quote`);
        return res.data;
    },

    savePost: async (postId: number) => {
        const res = await api.post(`/posts/${postId}/save`);
        return res.data;
    },

    hidePost: async (postId: number) => {
        const res = await api.post(`/posts/${postId}/hide`);
        return res.data;
    },

    reportPost: async (postId: number) => {
        const res = await api.post(`/posts/${postId}/report`);
        return res.data;
    },
};
