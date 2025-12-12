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

    user: User | null;
    original_post: Post | null;
}

export const postApi = {
    getFeed: async (page = 1, per_page = 10, type = "for_you") => {
        const res = await api.get(`/posts/feed`, {
            params: { page, per_page, type },
        });
        return res.data;
    },
};
