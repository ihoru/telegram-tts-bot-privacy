import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Read Aloud" },
  description:
    "How Read Aloud processes Telegram text and voice notes, in English and Russian.",
};

const effectiveDate = "3 September 2026";
const effectiveDateRu = "3 сентября 2026 года";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="topbar" aria-label="Policy navigation">
          <a className="brand" href="#top" aria-label="Read Aloud privacy policy">
            <Image
              src="/read-aloud-avatar.svg"
              alt=""
              width={44}
              height={44}
              priority
            />
            <span>
              <strong>Read Aloud</strong>
              <small>Text to voice</small>
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
            Read Aloud turns text sent in a private Telegram chat into a voice note. This
            page explains the small amount of data needed to do that, what the
            application does not retain, and where Telegram and hosting providers have
            their own responsibilities.
          </p>
          <div className="policy-meta">
            <span>Effective {effectiveDate}</span>
            <span lang="ru">Действует с {effectiveDateRu}</span>
            <span>Version 1.3</span>
          </div>
        </div>

        <div className="signal-grid" aria-label="Privacy highlights">
          <div className="signal-card">
            <span className="signal-number">01</span>
            <strong>Local speech</strong>
            <p>
              Qwen3-TTS or Silero, together with FFmpeg, process text and audio on the
              bot host.
            </p>
          </div>
          <div className="signal-card">
            <span className="signal-number">02</span>
            <strong>Bounded memory only</strong>
            <p>
              Queued text is not persisted and waits no more than ten minutes before
              rendering starts.
            </p>
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
          <strong>Read Aloud is an independent bot, not part of Telegram.</strong>
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
              When you message Read Aloud, Telegram delivers a message update to the bot.
              The application uses the text you send or forward, your Telegram
              language code, numeric user ID, chat type, and message/reply identifiers
              needed to localize the response, manage the queue fairly, and reply.
            </p>
            <p>
              Telegram updates may contain additional message metadata. Read Aloud does
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
              <li>enforce global and per-user capacity limits and schedule work fairly;</li>
              <li>report queue, rendering, and reply progress;</li>
              <li>generate and encode a voice note locally; and</li>
              <li>send that voice note back as a reply.</li>
            </ul>
            <p>
              Read Aloud does not use message content for advertising, profiling, or
              training a speech model.
            </p>
          </section>

          <section>
            <h3>
              <span>3</span> Storage and operational logs
            </h3>
            <p>
              Accepted message text and minimal routing identifiers may remain in the
              process-only queue for at most ten minutes before rendering starts. Queue
              state is used only for capacity, fairness, progress, rendering, and
              replies. Temporary WAV data and the finished OGG voice note also stay in
              process memory while a request is rendered and uploaded. The application
              does not write any of this material to a database, message history, cache,
              or audio archive. Memory is released through normal runtime cleanup; this
              is not a promise of secure memory erasure.
            </p>
            <p>
              Accepted work and queue state are not persisted. They may be lost during
              a crash or restart. Graceful-shutdown notices are best-effort and cannot be
              guaranteed during forced termination or a Telegram outage. A request that
              has waited ten minutes without starting expires, its text is released, and
              it is never rendered later.
            </p>
            <p>
              When an operator explicitly enables debug logging, logs include each
              incoming Telegram update as compact JSON with null-valued fields removed,
              plus the selected handler name and update ID. These payloads can contain
              message text, names, usernames, numeric identifiers, forwarding details,
              file identifiers, and other Telegram metadata. The bot token is not
              included. The bot&apos;s hosting infrastructure controls log access,
              retention, rotation, and deletion.
            </p>
          </section>

          <section>
            <h3>
              <span>4</span> Services involved
            </h3>
            <p>
              Depending on the configured voice, the locally hosted Qwen3-TTS or Silero
              model generates speech and FFmpeg encodes the audio on the bot host; no
              cloud TTS provider receives the text. Telegram still receives the incoming
              message and outgoing voice note because it provides the messaging service.
              The bot host may process ordinary infrastructure data needed to run and
              secure the service.
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
              request logs, and may set security cookies to deliver and protect the page.
            </p>
          </section>

          <section>
            <h3>
              <span>6</span> Your choices and security
            </h3>
            <p>
              You can stop using the bot at any time and manage your Telegram messages
              from Telegram. Read Aloud has no application account or stored user dataset
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
              Когда вы пишете боту Read Aloud, Telegram передает ему обновление с
              сообщением. Приложение использует отправленный или пересланный текст, код
              языка Telegram, числовой идентификатор пользователя, тип чата, а также
              идентификаторы сообщения и ответа. Это нужно для выбора языка интерфейса,
              справедливого управления очередью и отправки ответа.
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
              <li>применить общие и пользовательские ограничения вместимости и справедливо распределить очередь;</li>
              <li>сообщить об ожидании, создании и отправке ответа;</li>
              <li>локально создать и закодировать голосовую заметку;</li>
              <li>отправить голосовую заметку ответом на сообщение.</li>
            </ul>
            <p>
              Read Aloud не использует текст сообщений для рекламы, профилирования или
              обучения речевой модели.
            </p>
          </section>

          <section>
            <h3>
              <span>3</span> Хранение и технические журналы
            </h3>
            <p>
              Текст принятого сообщения и минимальные идентификаторы маршрутизации могут
              находиться только в памяти процесса в очереди не более десяти минут до
              начала озвучивания. Состояние очереди используется только для ограничения
              вместимости, справедливого распределения, уведомлений о ходе работы,
              озвучивания и отправки ответов. Временные WAV-данные и готовая голосовая
              заметка OGG также находятся в памяти процесса во время создания и отправки
              ответа. Приложение не записывает эти данные в базу, историю сообщений, кэш
              или аудиоархив. Память освобождается обычными средствами среды выполнения;
              это не обещание безопасного стирания памяти.
            </p>
            <p>
              Принятые задачи и состояние очереди не сохраняются. Они могут быть потеряны
              при сбое или перезапуске. Уведомления при штатном завершении отправляются по
              возможности и не гарантируются при принудительной остановке или недоступности
              Telegram. Если запрос не начал выполняться за десять минут, срок ожидания
              истекает, текст освобождается из памяти, и запрос позже не озвучивается.
            </p>
            <p>
              Если оператор явно включает уровень журналирования DEBUG, журналы содержат
              каждое входящее обновление Telegram в виде компактного JSON без полей со
              значением null, а также имя выбранного обработчика и идентификатор
              обновления. Эти данные могут включать текст сообщения, имена, username,
              числовые идентификаторы, сведения о пересылке, идентификаторы файлов и
              другие метаданные Telegram. Токен бота в журналы не включается.
              Инфраструктура хостинга управляет доступом к журналам, сроком их хранения,
              ротацией и удалением.
            </p>
          </section>

          <section>
            <h3>
              <span>4</span> Участвующие сервисы
            </h3>
            <p>
              В зависимости от выбранного голоса локально размещенная модель Qwen3-TTS
              или Silero создает речь, а FFmpeg кодирует аудио на сервере бота; текст не
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
              agent и журналы запросов, а также устанавливать защитные cookie, чтобы
              показывать и защищать страницу.
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
          <Image src="/read-aloud-avatar.svg" alt="" width={36} height={36} />
          <span>
            <strong>Read Aloud</strong>
            <small>Text to voice · Текст в голос</small>
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
