import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Vslukh" },
  description:
    "How Vslukh processes Telegram text and voice notes, in English and Russian.",
};

const effectiveDate = "27 August 2026";
const effectiveDateRu = "27 августа 2026 года";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="topbar" aria-label="Policy navigation">
          <a className="brand" href="#top" aria-label="Vslukh privacy policy">
            <Image
              src="/vslukh-avatar.svg"
              alt=""
              width={44}
              height={44}
              priority
            />
            <span>
              <strong>Vslukh</strong>
              <small>Вслух</small>
            </span>
          </a>
          <div className="language-links" aria-label="Languages">
            <a href="#english">English</a>
            <a href="#russian" lang="ru">
              Русский
            </a>
          </div>
        </nav>

        <div className="hero-content" id="top">
          <p className="eyebrow">Privacy policy · Политика конфиденциальности</p>
          <h1>Your words become a voice note — not a database.</h1>
          <p className="hero-translation" lang="ru">
            Ваш текст превращается в голосовую заметку, а не в запись в базе данных.
          </p>
          <p className="hero-summary">
            Vslukh turns text sent in a private Telegram chat into Russian speech.
            This page explains the small amount of data needed to do that, what the
            application does not retain, and where Telegram and hosting providers
            have their own responsibilities.
          </p>
          <div className="policy-meta">
            <span>Effective {effectiveDate}</span>
            <span lang="ru">Действует с {effectiveDateRu}</span>
            <span>Version 1.0</span>
          </div>
        </div>

        <div className="signal-grid" aria-label="Privacy highlights">
          <div className="signal-card">
            <span className="signal-number">01</span>
            <strong>Local speech</strong>
            <p>Piper and FFmpeg process the text on the bot host.</p>
          </div>
          <div className="signal-card">
            <span className="signal-number">02</span>
            <strong>No message history</strong>
            <p>The application has no database of messages or generated audio.</p>
          </div>
          <div className="signal-card">
            <span className="signal-number">03</span>
            <strong>No site tracking</strong>
            <p>This page has no account, form, analytics, or advertising code.</p>
          </div>
        </div>
      </header>

      <section className="notice" aria-label="Important distinction">
        <span className="notice-mark" aria-hidden="true">
          i
        </span>
        <div>
          <strong>Vslukh is an independent bot, not part of Telegram.</strong>
          <p>
            Telegram transports your message and the returned voice note under its
            own terms and privacy policy. Local speech generation does not change
            Telegram&apos;s handling of cloud chats.
          </p>
        </div>
        <a href="https://telegram.org/privacy" rel="noreferrer">
          Telegram policy <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="policy-shell" aria-label="Bilingual privacy policy">
        <article className="policy-column" id="english">
          <div className="column-heading">
            <span>EN</span>
            <div>
              <p>English</p>
              <h2>Privacy Policy</h2>
            </div>
          </div>

          <section>
            <h3>
              <span>1</span> What the bot processes
            </h3>
            <p>
              When you message Vslukh, Telegram delivers a message update to the bot.
              The application uses the text you send or forward, your Telegram
              language code, numeric user ID, chat type, and message/reply identifiers
              needed to localize the response, apply usage limits, and reply.
            </p>
            <p>
              Telegram updates may contain additional message metadata. Vslukh does
              not use forwarding details for narration and does not download
              unsupported media.
            </p>
          </section>

          <section>
            <h3>
              <span>2</span> Why it is processed
            </h3>
            <p>The application uses this information only to:</p>
            <ul>
              <li>confirm that the request is an eligible private-chat message;</li>
              <li>choose Russian or English interface text;</li>
              <li>enforce global and per-user concurrent-use limits;</li>
              <li>generate and encode a Russian voice note locally; and</li>
              <li>send that voice note back as a reply.</li>
            </ul>
            <p>
              Vslukh does not use message content for advertising, profiling, or
              training a speech model.
            </p>
          </section>

          <section>
            <h3>
              <span>3</span> Storage and operational logs
            </h3>
            <p>
              Message text, temporary WAV data, and the finished OGG voice note stay
              in process memory while a request is rendered and uploaded. The numeric
              user ID is held in an in-memory admission map while work is active. The
              application does not write this material to a database, message history,
              cache, or audio archive. Memory is released through normal runtime
              cleanup; this is not a promise of secure memory erasure.
            </p>
            <p>
              Content-free operational logs may be retained by the bot&apos;s hosting
              infrastructure. They can include timestamps, event type, character
              count, processing duration, output byte count, result type, and exception
              class. Application-authored logs exclude message text, names, usernames,
              Telegram tokens, and forwarding details.
            </p>
          </section>

          <section>
            <h3>
              <span>4</span> Services involved
            </h3>
            <p>
              Piper and FFmpeg perform speech generation and audio encoding locally on
              the bot host; no cloud TTS provider receives the text. Telegram still
              receives the incoming message and outgoing voice note because it provides
              the messaging service. The bot host may process ordinary infrastructure
              data needed to run and secure the service.
            </p>
          </section>

          <section>
            <h3>
              <span>5</span> This policy website
            </h3>
            <p>
              The site has no user account, form, application database, analytics, or
              advertising code. Its code does not set cookies. The hosting platform may
              process standard request information such as IP address, user agent, and
              request logs to deliver and protect the page.
            </p>
          </section>

          <section>
            <h3>
              <span>6</span> Your choices and security
            </h3>
            <p>
              You can stop using the bot at any time and manage your Telegram messages
              from Telegram. Vslukh has no application account or stored user dataset
              to export or delete. The bot is public to anyone who discovers its
              username, and ordinary bot chats are not end-to-end confidential. Do not
              send text that you would not trust to Telegram and the bot host.
            </p>
          </section>

          <section>
            <h3>
              <span>7</span> Changes to this policy
            </h3>
            <p>
              Material changes will appear on this page with a new effective date. A
              change to the bot&apos;s processing or retention behavior requires an
              explicit product update; this policy does not silently expand it.
            </p>
          </section>
        </article>

        <article className="policy-column" id="russian" lang="ru">
          <div className="column-heading">
            <span>RU</span>
            <div>
              <p>Русский</p>
              <h2>Политика конфиденциальности</h2>
            </div>
          </div>

          <section>
            <h3>
              <span>1</span> Какие данные обрабатывает бот
            </h3>
            <p>
              Когда вы пишете боту &quot;Вслух&quot;, Telegram передает ему обновление с
              сообщением. Приложение использует отправленный или пересланный текст, код
              языка Telegram, числовой идентификатор пользователя, тип чата, а также
              идентификаторы сообщения и ответа. Это нужно для выбора языка интерфейса,
              ограничения одновременных запросов и отправки ответа.
            </p>
            <p>
              Обновление Telegram может содержать дополнительные данные о сообщении.
              Бот не использует сведения о пересылке при озвучивании и не загружает
              неподдерживаемые медиафайлы.
            </p>
          </section>

          <section>
            <h3>
              <span>2</span> Зачем нужны эти данные
            </h3>
            <p>Приложение использует их только для того, чтобы:</p>
            <ul>
              <li>проверить, что запрос пришел из поддерживаемого личного чата;</li>
              <li>выбрать русский или английский текст интерфейса;</li>
              <li>применить общие и пользовательские ограничения нагрузки;</li>
              <li>локально создать и закодировать русскую голосовую заметку;</li>
              <li>отправить голосовую заметку ответом на сообщение.</li>
            </ul>
            <p>
              &quot;Вслух&quot; не использует текст сообщений для рекламы, профилирования или
              обучения речевой модели.
            </p>
          </section>

          <section>
            <h3>
              <span>3</span> Хранение и технические журналы
            </h3>
            <p>
              Текст сообщения, временные WAV-данные и готовая голосовая заметка OGG
              находятся в памяти процесса во время создания и отправки ответа. Числовой
              идентификатор пользователя временно находится в таблице активных задач в
              памяти. Приложение не записывает эти данные в базу, историю сообщений, кэш
              или аудиоархив. Память освобождается обычными средствами среды выполнения;
              это не обещание безопасного стирания памяти.
            </p>
            <p>
              Инфраструктура хостинга может сохранять технические журналы без содержимого
              сообщений: время и тип события, число символов, длительность обработки,
              размер результата, тип ответа и класс ошибки. Журналы самого приложения не
              содержат текст сообщений, имена, username, токен Telegram и сведения о
              пересылке.
            </p>
          </section>

          <section>
            <h3>
              <span>4</span> Участвующие сервисы
            </h3>
            <p>
              Piper и FFmpeg создают и кодируют речь локально на сервере бота; текст не
              передается облачному TTS-провайдеру. Telegram все равно получает входящее
              сообщение и исходящую голосовую заметку, поскольку предоставляет сервис
              обмена сообщениями. Хостинг бота может обрабатывать обычные технические
              данные, необходимые для работы и защиты сервиса.
            </p>
          </section>

          <section>
            <h3>
              <span>5</span> Этот сайт политики
            </h3>
            <p>
              На сайте нет учетных записей, форм, базы данных приложения, аналитики и
              рекламного кода. Код сайта не устанавливает cookie. Платформа хостинга
              может обрабатывать стандартные данные запроса, например IP-адрес, user
              agent и журналы запросов, чтобы показывать и защищать страницу.
            </p>
          </section>

          <section>
            <h3>
              <span>6</span> Ваш выбор и безопасность
            </h3>
            <p>
              Вы можете прекратить пользоваться ботом в любой момент и управлять своими
              сообщениями средствами Telegram. У бота нет учетной записи приложения или
              сохраненного набора пользовательских данных для экспорта или удаления. Бот
              доступен всем, кто узнает его username, а обычные чаты с ботами не являются
              конфиденциальными с оконечным шифрованием. Не отправляйте текст, который вы
              не готовы доверить Telegram и серверу бота.
            </p>
          </section>

          <section>
            <h3>
              <span>7</span> Изменения политики
            </h3>
            <p>
              Существенные изменения будут опубликованы на этой странице с новой датой
              вступления в силу. Изменение обработки или хранения данных требует явного
              обновления продукта; эта политика не расширяет их незаметно.
            </p>
          </section>
        </article>
      </section>

      <footer>
        <div>
          <Image src="/vslukh-avatar.svg" alt="" width={36} height={36} />
          <span>
            <strong>Vslukh · Вслух</strong>
            <small>Text to Russian voice · Текст в голос</small>
          </span>
        </div>
        <p>
          Effective {effectiveDate}
          <br />
          <span lang="ru">Действует с {effectiveDateRu}</span>
        </p>
      </footer>
    </main>
  );
}
