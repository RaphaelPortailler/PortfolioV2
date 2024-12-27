<?php

declare(strict_types=1);

namespace App\Controller\guest;

use App\Entity\Contact;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function home(Request $request, MailerInterface $mailer, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $contact = new Contact();
            $contact->setName($data->getName());
            $contact->setEmail($data->getEmail());
            $contact->setSubject($data->getSubject());
            $contact->setMessage($data->getMessage());
            $contact->setContactedAt(new \DateTime());
            $entityManager->persist($contact);
            $entityManager->flush();

            $email = (new Email())
                ->from('raphael.portailler@lapiscine.pro')
                ->to('raphel.port@icloud.com')
                ->replyTo($data->getEmail())
                ->subject($data->getSubject())
                ->text($data->getMessage());
            $mailer->send($email);
            $this->addFlash('success', 'Votre E-mail a bien été envoyé.');
            return $this->redirectToRoute('home');
        }

        return $this->render('guest/base.html.twig', [
            'form' => $form->createView()
        ]);
    }




}