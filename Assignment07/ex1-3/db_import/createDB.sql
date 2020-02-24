--
-- PostgreSQL database dump
--

-- Dumped from database version 11.1
-- Dumped by pg_dump version 11.1


SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2835 (class 1262 OID 43499)
-- Name: webtech19gallery; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE webtech19gallery WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';


ALTER DATABASE webtech19gallery OWNER TO postgres;

\connect webtech19gallery

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 199 (class 1259 OID 43514)
-- Name: images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.images (
    id integer NOT NULL,
    url_big character varying(100) NOT NULL,
    url_small character varying(100) NOT NULL,
    description character varying(100) NOT NULL
);


ALTER TABLE public.images OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 43512)
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_seq OWNER TO postgres;

--
-- TOC entry 2837 (class 0 OID 0)
-- Dependencies: 198
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- TOC entry 197 (class 1259 OID 43503)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying(100) NOT NULL,
    last_name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    token integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 43501)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 2838 (class 0 OID 0)
-- Dependencies: 196
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 200 (class 1259 OID 43520)
-- Name: users_images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_images (
    user_id integer NOT NULL,
    image_id integer NOT NULL
);


ALTER TABLE public.users_images OWNER TO postgres;

--
-- TOC entry 2697 (class 2604 OID 43517)
-- Name: images id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- TOC entry 2696 (class 2604 OID 43506)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 2828 (class 0 OID 43514)
-- Dependencies: 199
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.images (id, url_big, url_small, description) FROM stdin;
1	img/beach.jpg	img/beach_small.jpg	Goleta Beach near UCSB Campus
2	img/bus_lg.jpg	img/bus.jpg	A hippy bus in Santa Barbara
3	img/snail.jpg	img/snail_small.jpg	A giant sea snail
4	img/lake.jpg	img/lake_small.jpg	New Zealand lake in autumn
5	img/lion.jpg	img/lion_small.jpg	A lion at sunrise
6	img/waterfalls.jpg	img/waterfalls_small.jpg	Kuang si falls in Laos
7	img/canyon.jpg	img/canyon_small.jpg	Endless canyon landscape
\.


--
-- TOC entry 2826 (class 0 OID 43503)
-- Dependencies: 197
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, first_name, last_name, email, password, token) FROM stdin;
1	Sandra	Caldwell	sandy@nomail.com	12345	\N
2	Stanley	Martinez	stanley@nomail.com	qwertzu	\N
3	Dianna	Myers	diana@nomail.com	54321	\N
\.


--
-- TOC entry 2829 (class 0 OID 43520)
-- Dependencies: 200
-- Data for Name: users_images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_images (user_id, image_id) FROM stdin;
1	1
1	2
1	3
2	3
2	5
3	2
3	4
3	5
3	6
3	7
\.


--
-- TOC entry 2839 (class 0 OID 0)
-- Dependencies: 198
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.images_id_seq', 7, true);


--
-- TOC entry 2840 (class 0 OID 0)
-- Dependencies: 196
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- TOC entry 2701 (class 2606 OID 43519)
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- TOC entry 2699 (class 2606 OID 43511)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 2703 (class 2606 OID 43528)
-- Name: users_images users_images_image_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_images
    ADD CONSTRAINT users_images_image_id_fkey FOREIGN KEY (image_id) REFERENCES public.images(id);


--
-- TOC entry 2702 (class 2606 OID 43523)
-- Name: users_images users_images_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_images
    ADD CONSTRAINT users_images_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- TOC entry 2836 (class 0 OID 0)
-- Dependencies: 2835
-- Name: DATABASE webtech19gallery; Type: ACL; Schema: -; Owner: postgres
--

CREATE USER "gallery_root" with password 'password';
GRANT ALL ON DATABASE webtech19gallery TO gallery_root;
GRANT ALL ON SEQUENCE public.images_id_seq TO gallery_root WITH GRANT OPTION;
GRANT ALL ON SEQUENCE public.users_id_seq TO gallery_root WITH GRANT OPTION;
GRANT ALL ON TABLE public.images TO gallery_root WITH GRANT OPTION;
GRANT ALL ON TABLE public.users TO gallery_root WITH GRANT OPTION;
GRANT ALL ON TABLE public.users_images TO gallery_root WITH GRANT OPTION;


--
-- PostgreSQL database dump complete
--

