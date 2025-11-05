"use client";

import { useState, useEffect, useCallback } from "react";
import { FaTimes, FaExclamationCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function RelaunchPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Prevent body scroll when popup is open with proper scrollbar width handling
  useEffect(() => {
    if (!isOpen) return;

    // Calculate scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // Store original values
    const originalPaddingRight = document.body.style.paddingRight;
    const originalOverflow = document.body.style.overflow;
    
    // Apply scroll lock
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';

    return () => {
      // Restore original values
      document.body.style.paddingRight = originalPaddingRight;
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Reset step when popup opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
    }
  }, [isOpen]);

  // Keyboard navigation: ESC key to close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  const steps = [
    {
      title: "Sign in to your current app (now called WorshipBuddy Classic)",
      content: [
        "Before downloading the new app, open WorshipBuddy Classic and sign in to your account.",
        "If you already have a ScheduleBuddy account, it uses the same login — WorshipBuddy and ScheduleBuddy share the same account system."
      ]
    },
    {
      title: "Verify your data is synced",
      content: [
        "After signing in, close (kill) the app completely and reopen it. Confirm that your liked songs and saved sets are visible.",
        "This ensures your data is properly linked to your account."
      ]
    },
    {
      title: "Download the new WorshipBuddy app",
      content: [
        "Once your data is synced, download the new WorshipBuddy app from the Apple App Store or Google Play Store.",
        "You'll see both apps listed — the old one will appear as WorshipBuddy Classic, and the new one simply as WorshipBuddy."
      ],
      links: [
        {
          text: "Apple App Store",
          url: "https://apps.apple.com/us/app/worshipbuddy/id6754536842"
        },
        {
          text: "Google Play Store",
          url: "https://play.google.com/store/apps/details?id=com.Worshipbuddy.Songbook"
        }
      ]
    },
    {
      title: "Sign in on the new app",
      content: [
        "Use the same email address you used in WorshipBuddy Classic."
      ]
    },
    {
      title: "Enter the new Songbook ID",
      content: [
        "When prompted, enter the Songbook ID:"
      ],
      code: "COL128",
      codeNote: "make sure to use all capital letters"
    },
    {
      title: "Let the Songbook download",
      content: [
        "Wait for the download to finish — once completed, you'll be ready to start using the new app!"
      ]
    },
    {
      title: "Delete the old app",
      content: [
        "After confirming that your data has transferred successfully, you can safely delete WorshipBuddy Classic from your device."
      ]
    }
  ];

  const totalSteps = steps.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Helper function to render content with links
  const renderContentWithLinks = (paragraph, links) => {
    if (!links || links.length === 0) {
      return paragraph;
    }

    let parts = [paragraph];
    links.forEach(link => {
      const newParts = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const regex = new RegExp(`(${link.text})`, 'g');
          const split = part.split(regex);
          split.forEach((segment, idx) => {
            if (segment === link.text) {
              newParts.push(
                <a
                  key={`${link.text}-${idx}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-blue underline hover:text-primary-blue-light font-semibold"
                >
                  {segment}
                </a>
              );
            } else if (segment) {
              newParts.push(segment);
            }
          });
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return <>{parts}</>;
  };

  return (
    <>
      {/* Sticky Button */}
      <button
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 z-popup-button px-5 py-3 bg-primary-blue text-white rounded-lg font-semibold hover:bg-primary-blue-light transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in flex items-center gap-2 relaunch-popup-pulse-button ${
          isOpen ? 'hidden md:flex' : 'flex'
        }`}
        aria-label="Open transition guide"
      >
        <FaExclamationCircle />
        <span className="hidden sm:inline">New App Guide</span>
        <span className="sm:hidden">Guide</span>
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-popup-modal flex items-center justify-center p-2 md:p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="relaunch-popup-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <div className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] md:max-h-[90vh] md:h-auto overflow-hidden flex flex-col animate-slide-up mx-2 md:mx-0">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-primary-blue to-primary-blue-light px-4 py-2 md:px-6 md:py-4">
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 md:top-4 md:right-4 text-white hover:text-gray-200 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                aria-label="Close popup"
              >
                <FaTimes className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <h2 
                id="relaunch-popup-title"
                className="text-lg md:text-2xl lg:text-3xl font-bold text-white pr-8 md:pr-10 leading-tight"
              >
                How to Transition to the New WorshipBuddy App
              </h2>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 px-3 py-3 pb-2 md:px-6 md:py-6 lg:px-8 lg:py-8">
              {/* Mobile Stepper View */}
              <div className="md:hidden">
                <div className="space-y-3 text-gray-700">
                  {/* Introduction - always show on mobile to maintain box size */}
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="text-sm leading-relaxed">
                      We've released an <span className="font-semibold text-primary-blue">all-new version</span> of WorshipBuddy with exciting new features, a fresh design, and better performance!
                    </p>
                    <p className="mt-2 text-xs text-gray-600">
                      To make sure your liked songs and saved sets carry over correctly, please follow the steps below.
                    </p>
                  </div>

                  {/* Step Indicator */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentStep
                            ? 'bg-primary-blue flex-1'
                            : index < currentStep
                            ? 'bg-primary-blue opacity-50 flex-1'
                            : 'bg-gray-300 flex-1'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Current Step Content - fixed min-height to maintain consistent box size */}
                  <div className="flex flex-col min-h-[200px]">
                    <div className="flex gap-3 mb-0">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm">
                          {currentStep + 1}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base text-primary-blue mb-2 leading-tight">
                          {steps[currentStep].title}
                        </h3>
                        <div className="space-y-2">
                          {steps[currentStep].content.map((paragraph, idx) => (
                            <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                              {renderContentWithLinks(paragraph, steps[currentStep].links)}
                            </p>
                          ))}
                          {steps[currentStep].code && (
                            <div className="bg-gray-100 rounded-lg p-3 border-2 border-primary-blue mt-2">
                              <code className="text-lg font-bold text-primary-blue tracking-wider block text-center">
                                {steps[currentStep].code}
                              </code>
                              {steps[currentStep].codeNote && (
                                <p className="text-xs text-gray-600 mt-2 text-center">
                                  ({steps[currentStep].codeNote})
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Important Note - only show on last step */}
                    {currentStep === totalSteps - 1 && (
                      <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 mt-3">
                        <p className="text-xs text-amber-900 leading-relaxed">
                          <span className="font-semibold">Please note:</span> WorshipBuddy Classic will no longer be supported after January 31, 2026.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Desktop Full View */}
              <div className="hidden md:block">
                <div className="space-y-4 md:space-y-5 text-gray-700">
                  {/* Introduction */}
                  <div className="bg-blue-50 rounded-lg md:rounded-xl p-3 md:p-4 border border-blue-100">
                    <p className="text-sm md:text-base leading-relaxed">
                      We've released an <span className="font-semibold text-primary-blue">all-new version</span> of WorshipBuddy with exciting new features, a fresh design, and better performance!
                    </p>
                    <p className="mt-2 text-xs md:text-sm text-gray-600">
                      To make sure your liked songs and saved sets carry over correctly, please follow the steps below.
                    </p>
                  </div>

                  {/* Steps */}
                  <div className="space-y-3 md:space-y-4">
                    {steps.map((step, index) => (
                      <div key={index} className="flex gap-3 md:gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-xs md:text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm md:text-base text-primary-blue mb-1 leading-tight">
                            {step.title}
                          </h3>
                          {step.content.map((paragraph, idx) => (
                            <p key={idx} className={`text-xs md:text-sm text-gray-600 ${idx === 0 ? 'mb-1' : ''} leading-relaxed`}>
                              {renderContentWithLinks(paragraph, step.links)}
                            </p>
                          ))}
                          {step.code && (
                            <div className="bg-gray-100 rounded-lg p-2 md:p-3 border-2 border-primary-blue inline-block mt-2">
                              <code className="text-base md:text-lg font-bold text-primary-blue tracking-wider">
                                {step.code}
                              </code>
                              {step.codeNote && (
                                <p className="text-xs text-gray-600 mt-1">
                                  ({step.codeNote})
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Important Note */}
                  <div className="bg-amber-50 rounded-lg md:rounded-xl p-3 md:p-4 border border-amber-200 mt-4 md:mt-5">
                    <p className="text-xs md:text-sm text-amber-900 leading-relaxed">
                      <span className="font-semibold">Please note:</span> WorshipBuddy Classic will no longer be supported after January 31, 2026.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-3 py-2 md:px-6 md:py-4 bg-gray-50">
              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center justify-between gap-3">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 text-sm ${
                    currentStep === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <FaChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                
                <div className="text-xs text-gray-500">
                  {currentStep + 1} of {totalSteps}
                </div>

                {currentStep < totalSteps - 1 ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-4 py-2.5 bg-primary-blue text-white rounded-lg font-semibold hover:bg-primary-blue-light transition-all duration-200 hover:scale-105 text-sm"
                  >
                    Next
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleClose}
                    className="px-4 py-2.5 bg-primary-blue text-white rounded-lg font-semibold hover:bg-primary-blue-light transition-all duration-200 hover:scale-105 text-sm"
                  >
                    Got it!
                  </button>
                )}
              </div>

              {/* Desktop Footer */}
              <div className="hidden md:flex justify-end">
                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 md:px-6 md:py-3 bg-primary-blue text-white rounded-lg font-semibold hover:bg-primary-blue-light transition-all duration-200 hover:scale-105 text-sm md:text-base"
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

