-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost:3306
-- Üretim Zamanı: 15 May 2018, 08:47:23
-- Sunucu sürümü: 5.5.56-MariaDB
-- PHP Sürümü: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `samedb`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `anasayfaayarlari`
--

CREATE TABLE `anasayfaayarlari` (
  `hakkimda` text COLLATE utf8_turkish_ci NOT NULL,
  `nelerileugrasiyorum` text COLLATE utf8_turkish_ci NOT NULL,
  `ugras1` text COLLATE utf8_turkish_ci NOT NULL,
  `ugras2` text COLLATE utf8_turkish_ci NOT NULL,
  `ugras3` text COLLATE utf8_turkish_ci NOT NULL,
  `ugras4` text COLLATE utf8_turkish_ci NOT NULL,
  `ugras5` text COLLATE utf8_turkish_ci NOT NULL,
  `ugras6` text COLLATE utf8_turkish_ci NOT NULL,
  `footeryazi` text COLLATE utf8_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `anasayfaayarlari`
--

INSERT INTO `anasayfaayarlari` (`hakkimda`, `nelerileugrasiyorum`, `ugras1`, `ugras2`, `ugras3`, `ugras4`, `ugras5`, `ugras6`, `footeryazi`) VALUES
('Kayserili, kendisini yazılıma adamış, olumsuz yorumlara karşı kendisini sürekli iyiye motive ederek olumlu düşünen ve yapılamaz/yapamazsın denilen şeyleri yapmaktan ve farkındalık yaratmaktan zevk alan birisiyim. Daha 7 yaşımda bilgisayar ile tanıştım ve zamanımın büyük bir bölümünü oyun oynayarak geçirdim. Ortaokula kadar kendimi oyuna kaptırsam da liseye geçmeden bir sene önce kendimi bir anda yazılım ile iç içe merak salmış birisi olarak gördüm. O aralar kendimi pek geliştiremesem de yazılımın asıl serüveni lise 1 de başladı...', 'Suana kadar bir cok girismde bulundum asagida ilgi alanlarimi sizler icin siraladim. Detayli bilgiler icin iletisime gecebilirsiniz.', 'Tek hedefim, tek hayalim olan Machine Learning, suanlik seminerlere katilip idolum olan bazi buyuk bilim adamlarini takip ederek gecinsemde ileriki hedeflerim bu alanda kendimi oldukca gelistirmek.', 'Yazilim hayatina girisimden beri bu yana yaklasik 2 sene gecti. Bu alanda ilgim beni basaridan basariya surukledi. Homeoffice olarak calisma yurutuyor olmam beni biraz daha gelistirdi. Surekli musteri kazanmayi hedefledim.', 'Bu alanda farkli projelerde ve projelerimde yer aldim. Takim calismalarinda surekli beyin oldum. Sanal gerceklik emlakcilik sektorunde cesitli yarismalara katildim. Ileride sanal gercekligi ile farkli projelerleyim.', 'Suana kadar bircok websitem oldu degisik projelere giristim. Bunun yani sira bu sektorde SEO(Arama Motoru Optimizasyonu) verdim. Bu alanda kendimi oldukca gelistirdigimi dusunuyorum.', 'Softesla, yazılım üzerine kurmak istediğim üzerinde en çok yoğunlaştığım firma kuruluşu adayıydı. Belli sebeplerden ötürü kapatmak zorunda kaldım.', 'Android, IOS kisacasi populerlik kazanmis mobil cihaz platformunda UNITY5D ile uygulama, oyun yazmak icin kendimi her gecen gun gelistiriyorum. Daha once cikmis bilgisayar oyunlarim bulunmaktadir. En kisa surede mobil gelecektir.', 'Tüm Hakları Saklıdır @ Samed');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `blogyazilari`
--

CREATE TABLE `blogyazilari` (
  `blog_id` int(11) NOT NULL,
  `baslik` text COLLATE utf8_turkish_ci NOT NULL,
  `icerik` text COLLATE utf8_turkish_ci NOT NULL,
  `resim` text COLLATE utf8_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `blogyazilari`
--

INSERT INTO `blogyazilari` (`blog_id`, `baslik`, `icerik`, `resim`) VALUES
(32, 'Seo Nedir?', '“SEO” (Search Engine Optimization), kısaltmasıdır. Arama motorları SEO işlemleri ile web sitelerini daha kolay bir şekilde taraması için yapılan teknik kriter düzenlemelerdir. (Search Engine Optimization) Türkçe de Arama motoru optimizasyonu demektir.', 'default'),
(36, 'Android Studio vs Xamarin', 'Xamarin Visual Studio aracılığıyla da çalışabilen ve C# programlama destekli bir derleyicidir. Sorun oluşturduğu kısımlar ise derleyicinin kodları embed etmesinden kaynaklanıyor. En sağlıklısı ve sorunsuzu ta...', 'default'),
(38, 'Severek İzlediğim Filmler', 'asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf vasdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf ', 'default'),
(40, 'Dünyanın En Büyük Şirketleri', 'asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf asdkfasdklf vasdkfasdklf ', 'default'),
(41, 'Deneme SDeneme SDeneme SDeneme SDeneme S', 'Deneme SDeneme SDeneme SDeneme SDeneme SDeneme SDeneme SDeneme SDeneme SDeneme SDeneme SDeneme SDeneme SDeneme S', 'default');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `iletisim`
--

CREATE TABLE `iletisim` (
  `iletisim_id` int(11) NOT NULL,
  `ad` text COLLATE utf8_turkish_ci NOT NULL,
  `mail` text COLLATE utf8_turkish_ci NOT NULL,
  `telefon` text COLLATE utf8_turkish_ci NOT NULL,
  `mesaj` text COLLATE utf8_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `kullanicilar`
--

CREATE TABLE `kullanicilar` (
  `kul_id` int(11) NOT NULL,
  `kadi` text COLLATE utf8_turkish_ci NOT NULL,
  `sifre` text COLLATE utf8_turkish_ci NOT NULL,
  `adİ_soyadi` text COLLATE utf8_turkish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `kullanicilar`
--

INSERT INTO `kullanicilar` (`kul_id`, `kadi`, `sifre`, `adİ_soyadi`) VALUES
(1, 'karakusnavy', 'password', 'Samed Karakuş'),
(2, 'samed', '123', 'Samed Samed');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `blogyazilari`
--
ALTER TABLE `blogyazilari`
  ADD PRIMARY KEY (`blog_id`);

--
-- Tablo için indeksler `iletisim`
--
ALTER TABLE `iletisim`
  ADD PRIMARY KEY (`iletisim_id`);

--
-- Tablo için indeksler `kullanicilar`
--
ALTER TABLE `kullanicilar`
  ADD PRIMARY KEY (`kul_id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `blogyazilari`
--
ALTER TABLE `blogyazilari`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- Tablo için AUTO_INCREMENT değeri `iletisim`
--
ALTER TABLE `iletisim`
  MODIFY `iletisim_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Tablo için AUTO_INCREMENT değeri `kullanicilar`
--
ALTER TABLE `kullanicilar`
  MODIFY `kul_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
