interface Props {
  className?: string;
}

const PaperPlane = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className || ""}
    >
      <rect width="46" height="46" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_582_592" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_582_592"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAABWVJREFUeF7tnc9vG0UUx79jHJMAhyguWSs5AbmQFIHEjxP8IyCQ4AAnuBS1CQUi1AoESEgthQMSFIo4UU6ARKUKEL8LAgmQUgECIpHIu2PXEQRUFGf3kbG8xQEn9ow9u7Obt5ccMm/mzWeeZ+fNvHkrwE8iBEQirXAjYNAJGQGDZtAJEUioGbZoBp0QgYSaYYtm0AkRSKgZY4uemZm5fH19/QEAdwLYD6AJ4DwRvVYqlU6trKxcTKgPmWjGCHS5XJ4uFovvArhxh16uAngiCIKTADYzQcKyktqg25Z8bhfIl1QWQvwI4DHf998EQJb74nT12qA9z3sIwDGdXhHRNwAekVKe0ZHLU1kT0MqabzOE8CGAhSAIvjCUz6yYCeh1AFcN2OOzRPSwlPLbAevJjLgJ6GHNtRGAt4hoQUr5c2aIGSqaJuhYZbUsPBlF0WKtVvMN++G8mAugY0h/ATixsbHx1Nra2u/Ok9NU0CXQseoXhBDPFovF43lyelwE3QJORCsAjkgpX8mD0+Ms6Ni8ieiHQqGgnJ7TWXZ6nAfdMRV+pSw8CIK3NadHJ4pnCXQM7NMoiuZrtdonThDsU4ksgo67ppyeA1LK7/rsa6rFsgxagWs5PQDmgyD4JVWSPRrPOui4exsAXiWix6WUgYvA8wI6ZvsngBdcdHryBnqb0zM6OnpseXn5bxcsPK+gY7a/EdFRKeXLWwcQYZrA8w46ZnteCLGYptOzV0DHwL9sHzy8n7R17zXQl9bghUJhvlqtfp0U8L0KurVvtRUmcToMw0fr9bo6RLb6mICuAyhb1SrZyltOjxDioO/7y7aa1gY9OTn5kRDiDlsKpVjvRSI6MTIy8vTq6uqFYeuhDbpSqdxLRGqPOK9Py+lpNptPNhqNP4bVSW3QAIqe530G4NZhKeFoPYEQ4ujExMRLS0tLysUf6DEBjenp6fLm5uZ7AG4ZqPVsCP9KRItSyjfam1hGWhuBbrd0WaVSuZuIVKDjDQCuNNIgO0LfbwVyHjY9eBgE9DZE4+Pj42NjY9eFYTgnhJgFMAdA/b02Oyz70vScEGLB9/0P+irdLjQ00Ds1muMBOFsoFA5Vq1UVV9jzsQ465wPQcnqiKDpcq9V+2o12aqB3Ukq9aMMw3B9F0fUqwL1jGprsaTbpFVDRVi+Wy+WDO61QnAO9E6upqal9URR1DkBrILbWvFenx3d7y0KI53zfP9BNn8yA1hwAtQral8IA1IMg6DrweQWdlqXXgiDoOsVlBnTH3N1aOrbn7rSAdv2xENEzUspDmZg6FNAoiubCMFRA1cswnoudfhkKIZ73fX++fTvtf6xTs+icrK/dWd7lBGi32SAdh2UXoNds3TlM7ZdjYeWRuAuuNpXu6dhUusJCp1yqMvlNJfXCajabZ4QQN7tEwpIuqW2Tqo3/z/fAXnS6G/+e590HQEX+5PVx4yirUql8TES355CyW4eznudxuIGBlWkvuzzPG9bNWQN1hyrifABNHkArZ4NDwoZqt9sr4yBHi3BV1Ry2axkwB6JbBty6T85XK+xR5stC9ti2aubrb5YB84VOy4BV9XxF2TJkvnRvGTCnkbAJmBOj2KTLqX6ABHbvOHmVMmKLoDkdW+csYQE0JxjsNg0PETSnzNztPed5HieBNVgImBxlcVrjhEA/COC4TlucqNsgJq6del4l2r6pF2xOPf8vIe2pQ4m2P6bwzi6w+WMK/7FCI9CqjtnZ2VKj0bifiO7q+DzIEhGdKpVKr+cpU26vX24//zcG3U/lXGbAqYMB6hNgi9ZnZiTBoI2w6QsxaH1mRhIM2gibvhCD1mdmJMGgjbDpCzFofWZGEv8AM1qieSVbg+4AAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default PaperPlane;
